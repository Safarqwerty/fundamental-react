function Article () {
    const name = "Saparuddin"
    const titles = ["Belajar ReactJs", "Belajar NextJs", "Belajar NodeJs"]

    return (
        <>
            <div>{name}</div>
            <div>
                {titles.map((title) => {
                    return( 
                        <>
                            <div>{title}</div>
                            <div>{title}</div>
                            <div>{title}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Article;