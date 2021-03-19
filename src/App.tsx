import React, { useEffect, useRef, useState } from "react";
import aituBridge from "@btsd/aitu-bridge";
import {
  IonApp,
  IonSegmentButton,
  IonSegment,
  IonSlides,
  IonBackButton,
  IonMenuButton,
  IonSearchbar,
  IonSlide,
  IonButtons,
  IonContent,
  IonButton,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem, IonIcon, IonLabel, IonPage, IonList, IonRouterOutlet, IonMenu,
} from "@ionic/react";

import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import axios from 'axios';
import {
  create,
  ellipsisHorizontal,
  ellipsisVertical, helpCircle,
  personCircle,
  pin,
  search,
  star,
  walk,
  warning,
  wifi,
  wine
} from "ionicons/icons";

interface ISlideContentProps {
  title: string;
  onClick: () => void;
  description: string;
  buttonTitle: string;
  imgSrc: string;
}




const SlideContent: React.FC<ISlideContentProps> = ({
  onClick,
  title,
  description,
  buttonTitle,
  imgSrc,
}) => {
  return (
    <>
      <img src={imgSrc} />
      <div className="slide-block">
        <IonText color="dark">
          <h2>{title}</h2>
        </IonText>
        <IonText>
          <sub>{description}</sub>
        </IonText>
      </div>
      <div className="slide-button">
        <IonButton expand="full" onClick={onClick}>
          {buttonTitle}
        </IonButton>
      </div>
    </>
  );
};

const Toolbar: React.FC = ()=>{
  return(
      <IonApp>
      <IonToolbar>
        <IonTitle>Title Only</IonTitle>
      </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>Back Button</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonTitle size="small">Small Title above a Default Title</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Default Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="solid">
        <IonIcon slot="start" icon={personCircle} />
        Contact
      </IonButton>
    </IonButtons>
    <IonTitle>Solid Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton fill="solid" color="secondary">
        Help
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="outline">
        <IonIcon slot="start" icon={star} />
        Star
      </IonButton>
    </IonButtons>
    <IonTitle>Outline Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton color="danger" fill="outline">
        Edit
        <IonIcon slot="end" icon={create} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>Account</IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">Edit</IonButton>
    </IonButtons>
    <IonTitle>Text Only Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Left side menu toggle</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Right side menu toggle</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="Search Favorites" />
  </IonToolbar>

  <IonToolbar>
    <IonSegment value="all">
      <IonSegmentButton value="all">
        All
      </IonSegmentButton>
      <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
    </IonSegment>
  </IonToolbar>

  <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Secondary Toolbar</IonTitle>
  </IonToolbar>

  <IonToolbar color="dark">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Dark Toolbar</IonTitle>
  </IonToolbar>
      </IonApp>
  )

};
const Menu: React.FC = () =>{
  return(
      <IonApp>
          <IonMenu side="start" menuId="first">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>Start Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          <IonMenu side="start" menuId="custom" className="my-custom-menu">
            <IonHeader>
              <IonToolbar color="tertiary">
                <IonTitle>Custom Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          <IonMenu side="end" type="push">
            <IonHeader>
              <IonToolbar color="danger">
                <IonTitle>End Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet></IonRouterOutlet>
      </IonApp>
  )
}

const App: React.FC = () => {

  //const response = axios.get('https://unknownasd.herokuapp.com/test/get_hello');

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  const slider = useRef<HTMLIonSlidesElement>(null);

  async function getMe() {
    try {
      const data = await aituBridge.getMe();
      setName(data.name);
    } catch (e) {
      // handle error
      console.log(e);
    }
  }

  useEffect(() => {
    if (aituBridge.isSupported()) {
      getMe();
    }
  }, []);

  const [name, setName] = useState("<username>");

  const handleButtonClick = () => {
    slider.current?.slideNext();
  };
  return (


    <IonApp>
      {/*<IonContent>*/}
      {/*  <IonSlides pager={true} options={slideOpts} ref={slider}>*/}
      {/*    <IonSlide>*/}
      {/*      <SlideContent*/}
      {/*        title={`Привет, ${name}, Мини-приложения в Aitu`}*/}
      {/*        onClick={handleButtonClick}*/}
      {/*        description={*/}
      {/*          "Расскажем, что это и как использовать aitu.apps для своего бизнеса"*/}
      {/*        }*/}
      {/*        buttonTitle={"Я готов!"}*/}
      {/*        imgSrc={"/assets/slide1.png"}*/}
      {/*      ></SlideContent>*/}
      {/*    </IonSlide>*/}
      {/*    <IonSlide>*/}
      {/*      <SlideContent*/}
      {/*          title={"+800.000 пользователей Aitu"}*/}
      {/*          onClick={handleButtonClick}*/}
      {/*          description={*/}
      {/*            "Могут увидеть ваше мини-приложение и стать его пользователями"*/}
      {/*          }*/}
      {/*          buttonTitle={"Интересно"}*/}
      {/*          imgSrc={"/assets/slide2.png"}*/}
      {/*      ></SlideContent>*/}
      {/*    </IonSlide>*/}
      {/*    <IonSlide>*/}
      {/*      <SlideContent*/}
      {/*          title={"Всегда под рукой "}*/}
      {/*          onClick={handleButtonClick}*/}
      {/*          description={*/}
      {/*            "Каталог с мини-приложениями находится на центральной вкладке. Пользователи легко его найдут"*/}
      {/*          }*/}
      {/*          buttonTitle={"Что ещё?"}*/}
      {/*          imgSrc={"/assets/slide3.png"}*/}
      {/*      ></SlideContent>*/}
      {/*    </IonSlide>*/}
      {/*    <IonSlide>*/}
      {/*      <SlideContent*/}
      {/*          title={"Баннер с ваши предложением"}*/}
      {/*          onClick={handleButtonClick}*/}
      {/*          description={*/}
      {/*            "         Уникальная скидка, спецпредложение или акция. Донесите ценное предложение до всех пользователей Aitu"*/}
      {/*          }*/}
      {/*          buttonTitle={"Далее"}*/}
      {/*          imgSrc={"/assets/slide4.png"}*/}
      {/*      ></SlideContent>*/}
      {/*    </IonSlide>*/}
      {/*  </IonSlides>*/}
      {/*</IonContent>*/}


      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>CardExamples</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>ion-item in a card, icon left, button right</IonLabel>
              <IonButton color="warning" fill="outline" slot="end">View</IonButton>
            </IonItem>

            <IonCardContent>
              This is content, without any paragraph or header tags,
              within an ion-cardContent element.
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem href="#" className="ion-activated">
              <IonIcon icon={wifi} slot="start" />
              <IonLabel>Card Link Item 1 activated</IonLabel>
            </IonItem>

            <IonItem href="#">
              <IonIcon icon={wine} slot="start" />
              <IonLabel>Card Link Item 2</IonLabel>
            </IonItem>

            <IonItem className="ion-activated">
              <IonIcon icon={warning} slot="start" />
              <IonLabel>Card Button Item 1 activated</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={walk} slot="start" />
              <IonLabel>Card Button Item 2</IonLabel>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonPage>
      <Toolbar/>
    </IonApp>
  );
};

export default App;
