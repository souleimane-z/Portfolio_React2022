import React from "react";
import Zoom from "react-medium-image-zoom"; //🔎
import ReactTextCollapse from "react-text-collapse"; //📓
// import { Motion } from "react-motion";
import "react-medium-image-zoom/dist/styles.css";
import "./Projects.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

import webdev from "../../Assets/Projects/webdev.gif";


export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // état par default (texte fermé)
    collapseText: <small>...montrer plus</small>, // bouton pour ouvrir le texte 🖱️
    expandText: <small>réduire</small>, // bouton pour fermer le texte 🖱️
    minHeight: 200, // Taille du composant quand il est fermé📏
    maxHeight: 380, // Taille du composant quand il est ouvert 📏
    textStyle: {
      fontFamily: "CourBd",
      cursor: "cell",
      color: "#ffcab5",
      textDecoration: "underline",
      marginTop: "15px",
      textUnderlineOffset: "3px",
      textTransform: "uppercase",
    },
  };

  return (
    <div className="screen-heading fade-in" id={props.id || ""}>
      <ScreenHeading title={"Projets"} subHeading={"Quelque Réalisations"} />

      <div className="cards-container">
        <div className="cards" id="webdev">
          <div className="image">
            <Zoom>
              {" "}
              {/* Composant qui sert à reduire le texte 🔎 */}
              <picture>
                <source media="(max-width: 800px)" srcSet={webdev} />
                <img alt="rendering issue" src={webdev} />
              </picture>
            </Zoom>
            <div className="small-infos">
              <small>cliquez sur l'image pour agrandir</small>
            </div>
          </div>
          <div className="text">
            <h3 className="title">webdev</h3>
            <div className="paragraph">
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p className="OC-subject">projet:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam malesuada ac tellus id convallis. Curabitur condimentum
                  molestie urna in vestibulum. Mauris eu pulvinar arcu, vitae
                  porttitor mi. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Phasellus tempor ex
                  quis lorem fermentum auctor. Ut interdum massa et risus
                  commodo elementum. Nulla facilisi. Phasellus mollis metus
                  vitae volutpat maximus. Donec vel nisl eget eros feugiat
                  elementum. Vivamus vel viverra lorem. Sed augue felis,
                  tincidunt vitae dapibus non, lacinia vitae ex. Sed elit lorem,
                  semper non felis ut, pulvinar consectetur orci. Donec
                  volutpat, quam vitae iaculis lobortis, orci nibh elementum
                  dolor, vel tincidunt erat odio vel turpis. Cras id pretium
                  metus. Integer porta ultrices laoreet. Nunc interdum sodales
                  tellus, vitae tristique ante varius ac. Maecenas rhoncus quam
                  sed neque viverra, eu molestie urna semper. Duis egestas lacus
                  id dapibus tincidunt. Aenean ornare hendrerit pellentesque.
                  Donec sagittis, eros quis sollicitudin suscipit, lectus ante
                  luctus eros, non tempor risus justo nec arcu. Etiam feugiat
                  nec eros in placerat. Donec aliquam at nisl sed fringilla. Sed
                  eros justo, porta volutpat nibh a, imperdiet ultricies urna.
                  Nullam suscipit rhoncus ultrices. Nullam pulvinar leo eget
                  orci malesuada, ac efficitur quam rutrum. Proin at imperdiet
                  ligula. Duis molestie neque eu commodo venenatis. Morbi leo
                  ex, auctor vel nisl at, mattis gravida enim. Proin rutrum,
                  nisl at interdum mattis, ipsum mauris ultrices tellus, ac
                  fermentum mi velit at lorem. Nunc sagittis metus consequat
                  libero molestie, ut ullamcorper nisi malesuada. Nunc ut
                  tristique libero, id finibus magna. Ut mi magna, dictum id
                  odio vitae, ultricies lobortis elit. In euismod enim vel nunc
                  vehicula, consequat facilisis diam vehicula. Morbi sodales
                  mattis felis, vitae consectetur justo dictum vel. Mauris et
                  porta dui. Cras volutpat leo erat, nec imperdiet turpis
                  egestas vitae. Vestibulum vestibulum eros metus, eu tempor
                  eros varius quis. Phasellus sit amet semper lacus, eu congue
                  nulla. Nunc blandit metus erat, eget malesuada ipsum mollis
                  vel. Etiam sollicitudin mollis volutpat. Donec ullamcorper
                  nisl orci, ut rutrum tortor porttitor sit amet. Cras dui elit,
                  varius non auctor a, rhoncus vitae nunc. In lacus lorem,
                  aliquet eget interdum eget, commodo et orci. Ut facilisis
                  posuere mollis. In cursus efficitur interdum. Phasellus
                  faucibus quam quis odio volutpat, in consectetur massa varius.
                  Mauris eu consectetur ligula. Quisque auctor ante enim, sed
                  rutrum risus gravida vitae. Donec vel erat metus. Nunc
                  porttitor consectetur lectus, et lacinia ligula tristique at.
                  Nunc eu est at eros iaculis tempus. Nulla facilisi. Nunc
                  hendrerit nisi vitae ex elementum, nec gravida magna
                  fringilla. Nullam aliquet justo nec lorem blandit hendrerit.
                  Sed pretium turpis ipsum, vestibulum convallis urna lobortis
                  eget. Nulla facilisi.
                </p>
              </ReactTextCollapse>
            </div>
            <div className="link-techs">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code source
              </a>
            </div>
          </div>
        </div>
        <div className="cards" id="webdev">
          <div className="image">
            <Zoom>
              {" "}
              {/* Composant qui sert à reduire le texte 🔎 */}
              <picture>
                <source media="(max-width: 800px)" srcSet={webdev} />
                <img alt="rendering issue" src={webdev} />
              </picture>
            </Zoom>
            <div className="small-infos">
              <small>cliquez sur l'image pour agrandir</small>
            </div>
          </div>
          <div className="text">
            <h3 className="title">webdev</h3>
            <div className="paragraph">
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p className="OC-subject">projet:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam malesuada ac tellus id convallis. Curabitur condimentum
                  molestie urna in vestibulum. Mauris eu pulvinar arcu, vitae
                  porttitor mi. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Phasellus tempor ex
                  quis lorem fermentum auctor. Ut interdum massa et risus
                  commodo elementum. Nulla facilisi. Phasellus mollis metus
                  vitae volutpat maximus. Donec vel nisl eget eros feugiat
                  elementum. Vivamus vel viverra lorem. Sed augue felis,
                  tincidunt vitae dapibus non, lacinia vitae ex. Sed elit lorem,
                  semper non felis ut, pulvinar consectetur orci. Donec
                  volutpat, quam vitae iaculis lobortis, orci nibh elementum
                  dolor, vel tincidunt erat odio vel turpis. Cras id pretium
                  metus. Integer porta ultrices laoreet. Nunc interdum sodales
                  tellus, vitae tristique ante varius ac. Maecenas rhoncus quam
                  sed neque viverra, eu molestie urna semper. Duis egestas lacus
                  id dapibus tincidunt. Aenean ornare hendrerit pellentesque.
                  Donec sagittis, eros quis sollicitudin suscipit, lectus ante
                  luctus eros, non tempor risus justo nec arcu. Etiam feugiat
                  nec eros in placerat. Donec aliquam at nisl sed fringilla. Sed
                  eros justo, porta volutpat nibh a, imperdiet ultricies urna.
                  Nullam suscipit rhoncus ultrices. Nullam pulvinar leo eget
                  orci malesuada, ac efficitur quam rutrum. Proin at imperdiet
                  ligula. Duis molestie neque eu commodo venenatis. Morbi leo
                  ex, auctor vel nisl at, mattis gravida enim. Proin rutrum,
                  nisl at interdum mattis, ipsum mauris ultrices tellus, ac
                  fermentum mi velit at lorem. Nunc sagittis metus consequat
                  libero molestie, ut ullamcorper nisi malesuada. Nunc ut
                  tristique libero, id finibus magna. Ut mi magna, dictum id
                  odio vitae, ultricies lobortis elit. In euismod enim vel nunc
                  vehicula, consequat facilisis diam vehicula. Morbi sodales
                  mattis felis, vitae consectetur justo dictum vel. Mauris et
                  porta dui. Cras volutpat leo erat, nec imperdiet turpis
                  egestas vitae. Vestibulum vestibulum eros metus, eu tempor
                  eros varius quis. Phasellus sit amet semper lacus, eu congue
                  nulla. Nunc blandit metus erat, eget malesuada ipsum mollis
                  vel. Etiam sollicitudin mollis volutpat. Donec ullamcorper
                  nisl orci, ut rutrum tortor porttitor sit amet. Cras dui elit,
                  varius non auctor a, rhoncus vitae nunc. In lacus lorem,
                  aliquet eget interdum eget, commodo et orci. Ut facilisis
                  posuere mollis. In cursus efficitur interdum. Phasellus
                  faucibus quam quis odio volutpat, in consectetur massa varius.
                  Mauris eu consectetur ligula. Quisque auctor ante enim, sed
                  rutrum risus gravida vitae. Donec vel erat metus. Nunc
                  porttitor consectetur lectus, et lacinia ligula tristique at.
                  Nunc eu est at eros iaculis tempus. Nulla facilisi. Nunc
                  hendrerit nisi vitae ex elementum, nec gravida magna
                  fringilla. Nullam aliquet justo nec lorem blandit hendrerit.
                  Sed pretium turpis ipsum, vestibulum convallis urna lobortis
                  eget. Nulla facilisi.
                </p>
              </ReactTextCollapse>
            </div>
            <div className="link-techs">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code source
              </a>
            </div>
          </div>
        </div>
        <div className="cards" id="webdev">
          <div className="image">
            <Zoom>
              {" "}
              {/* Composant qui sert à reduire le texte 🔎 */}
              <picture>
                <source media="(max-width: 800px)" srcSet={webdev} />
                <img alt="rendering issue" src={webdev} />
              </picture>
            </Zoom>
            <div className="small-infos">
              <small>cliquez sur l'image pour agrandir</small>
            </div>
          </div>
          <div className="text">
            <h3 className="title">webdev</h3>
            <div className="paragraph">
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p className="OC-subject">projet:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam malesuada ac tellus id convallis. Curabitur condimentum
                  molestie urna in vestibulum. Mauris eu pulvinar arcu, vitae
                  porttitor mi. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Phasellus tempor ex
                  quis lorem fermentum auctor. Ut interdum massa et risus
                  commodo elementum. Nulla facilisi. Phasellus mollis metus
                  vitae volutpat maximus. Donec vel nisl eget eros feugiat
                  elementum. Vivamus vel viverra lorem. Sed augue felis,
                  tincidunt vitae dapibus non, lacinia vitae ex. Sed elit lorem,
                  semper non felis ut, pulvinar consectetur orci. Donec
                  volutpat, quam vitae iaculis lobortis, orci nibh elementum
                  dolor, vel tincidunt erat odio vel turpis. Cras id pretium
                  metus. Integer porta ultrices laoreet. Nunc interdum sodales
                  tellus, vitae tristique ante varius ac. Maecenas rhoncus quam
                  sed neque viverra, eu molestie urna semper. Duis egestas lacus
                  id dapibus tincidunt. Aenean ornare hendrerit pellentesque.
                  Donec sagittis, eros quis sollicitudin suscipit, lectus ante
                  luctus eros, non tempor risus justo nec arcu. Etiam feugiat
                  nec eros in placerat. Donec aliquam at nisl sed fringilla. Sed
                  eros justo, porta volutpat nibh a, imperdiet ultricies urna.
                  Nullam suscipit rhoncus ultrices. Nullam pulvinar leo eget
                  orci malesuada, ac efficitur quam rutrum. Proin at imperdiet
                  ligula. Duis molestie neque eu commodo venenatis. Morbi leo
                  ex, auctor vel nisl at, mattis gravida enim. Proin rutrum,
                  nisl at interdum mattis, ipsum mauris ultrices tellus, ac
                  fermentum mi velit at lorem. Nunc sagittis metus consequat
                  libero molestie, ut ullamcorper nisi malesuada. Nunc ut
                  tristique libero, id finibus magna. Ut mi magna, dictum id
                  odio vitae, ultricies lobortis elit. In euismod enim vel nunc
                  vehicula, consequat facilisis diam vehicula. Morbi sodales
                  mattis felis, vitae consectetur justo dictum vel. Mauris et
                  porta dui. Cras volutpat leo erat, nec imperdiet turpis
                  egestas vitae. Vestibulum vestibulum eros metus, eu tempor
                  eros varius quis. Phasellus sit amet semper lacus, eu congue
                  nulla. Nunc blandit metus erat, eget malesuada ipsum mollis
                  vel. Etiam sollicitudin mollis volutpat. Donec ullamcorper
                  nisl orci, ut rutrum tortor porttitor sit amet. Cras dui elit,
                  varius non auctor a, rhoncus vitae nunc. In lacus lorem,
                  aliquet eget interdum eget, commodo et orci. Ut facilisis
                  posuere mollis. In cursus efficitur interdum. Phasellus
                  faucibus quam quis odio volutpat, in consectetur massa varius.
                  Mauris eu consectetur ligula. Quisque auctor ante enim, sed
                  rutrum risus gravida vitae. Donec vel erat metus. Nunc
                  porttitor consectetur lectus, et lacinia ligula tristique at.
                  Nunc eu est at eros iaculis tempus. Nulla facilisi. Nunc
                  hendrerit nisi vitae ex elementum, nec gravida magna
                  fringilla. Nullam aliquet justo nec lorem blandit hendrerit.
                  Sed pretium turpis ipsum, vestibulum convallis urna lobortis
                  eget. Nulla facilisi.
                </p>
              </ReactTextCollapse>
            </div>
            <div className="link-techs">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
