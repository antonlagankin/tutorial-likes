export interface IPostProps {
    post: {
        id: number,
        title: string,
        body: string
    }
}

export function PostItem({post}: IPostProps) {
    return (
        <div className="border flex flex-wrap max-w-2xl mx-auto my-2 justify-between items-center">
            <div className="p-2">
                <h1 className="px-4 py-2">
                    <span className="font-bold">{post.id}:</span>
                    <span className="font-bold">{post.title}</span>
                </h1>
                <div>{post.body}</div>
            </div>
            <div className="p-2 mx-2 my-4">
                <button className="bg-gray-400 p-2 rounded">Удалить</button>
            </div>
        </div>
    )
}