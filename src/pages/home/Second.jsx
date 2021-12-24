

const Second = () => {
    return (
        <>
            <div className="second">
                <div className="row mt-5 mb-5">
                    <div className="col-3 ml-5">
                        <ul className="ml-5">
                            <li><img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Liga_MX.svg-360x284.png" alt="icon" width={80}/></li>
                            <li><img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Liga_MX.svg-360x284.png" alt="icon" width={80}/></li>
                            <li><img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Liga_MX.svg-360x284.png" alt="icon" width={80}/></li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <video controls src="https://www.youtube.com/watch?v=yrFQCOcTlFY" className="video_ad" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Second;