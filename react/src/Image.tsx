import {useState} from "react";
import Modal from 'react-modal';
import './styles.css'

interface Props {
  image: any;
}

export function Image(props: Props) {
  const {image} = props;
  const [photographerVisible, setPhotographerVisible] = useState(false);

  return (
    <>
      <div className="photoCard">
        <div className="photoName">{image.alt}</div>
        <img width="250" height="360" src={image.src.original}></img>
        <button type="button" onClick={() => setPhotographerVisible(true)}>Show photo data</button>

      </div>
      {photographerVisible &&
          <Modal
              className="modal"
              isOpen={photographerVisible}
              onRequestClose={() => setPhotographerVisible(false)}
              contentLabel={"Aktorzy filmu "}
              overlayClassName="overlay"
          >
              <div style={{color: '#000000'}}>
                  <div className="modalHeader">
                      <h3 className="h3">Szczegóły zdjęcia</h3>
                      <button
                          className="closeButton"
                          type="button"
                          onClick={() => setPhotographerVisible(false)}
                      >Zamknij
                      </button>
                  </div>
                  <div>{`image author: ${image.photographer}`}</div>
                  <div>{`image width: ${image.width}`}</div>
                  <div>{`image height: ${image.height}`}</div>
                  <div>{`image description: ${image.alt}`}</div>
                  <div>{`photographer account:`}
                      <a href={"https://www.pexels.com/@michael-block-1691617"}>Link</a>
                  </div>

              </div>
          </Modal>
      }
    </>
  )
}