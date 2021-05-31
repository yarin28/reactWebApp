import React, { useRef, useEffect, ComponentType, useState } from "react"
import { w3cwebsocket as WebSocketClient } from "websocket"

interface VideoStreamParams {
    showFrames?: boolean;
    wsUrl: string;
}

/**
 * 
 * @param wsUrl the url to register to recive the stream
 * @prarm showFrames the option to show the stream
 * @brief will show the user the camera stream from the jetson
 * @returns 
 */
const VideoStream: ComponentType<VideoStreamParams> = ({ wsUrl, showFrames }) => {
    const client = useRef<WebSocketClient>()
    const lastTime = useRef<Date>()
    const lastTimeWebsocket = useRef<Date>()
    const [frames, setFrames] = useState(0);
    const [frames2, setFrames2] = useState(0);
    const [imageData, setImageData] = useState<string | undefined>();

    useEffect(() => {
        client.current = new WebSocketClient(wsUrl);
        client.current.onmessage = async (message) => {
            if (showFrames) {
                const current = new Date()
                if (lastTimeWebsocket.current === undefined) {
                    lastTimeWebsocket.current = current
                } else {
                    const total = current.getTime() - lastTimeWebsocket.current.getTime()
                    setFrames(1 / (total / 1000))
                    lastTimeWebsocket.current = current
                }
            }

            setImageData(await (message.data as any as Blob).text());
            client.current?.send(JSON.stringify({ status: "OK" }));
        }
        return () => {
            client.current?.close();
        }
    }, [wsUrl])
    useEffect(() => {
        if (showFrames) {
            const current = new Date()
            if (lastTime.current === undefined) {
                lastTime.current = current
            } else {
                const total = current.getTime() - lastTime.current.getTime()
                setFrames2(1 / (total / 1000))
                lastTime.current = current
            }
        }
    }, [imageData])
    if (imageData === undefined)
        return <></>;


    return (<>
        <img src={`data:image/jpg;base64, ${imageData}`} />
        {showFrames && <>
            <div>{frames.toFixed(3)}</div>
            <div>{frames2.toFixed(3)}</div>
        </>}
    </>);
}
export default VideoStream;

