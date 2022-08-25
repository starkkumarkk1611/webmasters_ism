import "./Messages.css";
function Messages_cmp() {
    return (
        < >
            <div className="messages-section">
                <h2 className='title'>A repository of key messages from notable personalities and dignitaries.</h2>
                <div className="container-message">
                    <div className="left-part">
                        <iframe
                             src="https://www.youtube.com/embed/Tj_y2N4NkSE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className="right-part">
                        <h3>Message from the Chairman</h3><br />
                        <p>
                            The transformation of Indian education dates back to it being the pioneer in the 800 BCs where the undivided India had global institutions, whereas the deterioration began with the ages of modernization and industrialization.
                            <br /><br />
                            Prof. Anil D. Sahasrabudhe
                            <br />
                            Chairman
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages_cmp;