import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, addCircle, addCircleOutline, close, pencil } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { useEffect, useState } from 'react';
import { removeBebida, saveBebida, searchBebidas } from './BebidaApi';
import Bebida from './Bebida';

const BebidaEdit: React.FC = () => {

  const { name,id } = useParams<{ name: string; id: string; }>();
  const [bebidas, setBebidas] = useState<any>([]);

  useEffect(() => {
    search();
  },[]);

  const search = () => {
    //let result = searchBebidas();
    //setBebidas(result);
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>




      <IonContent>
        <IonCard>
          <IonTitle>Gestion De Bebidas {id}</IonTitle>




          <IonItem>
            <IonButton color={'primary'} slot='end'>
                <IonIcon name={addCircle}/>
              Guardar
            </IonButton>
          </IonItem>

        
   
      </IonCard>


      <IonButton onClick={()=>{}} fill= 'clear' >
              Prueba
            </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default BebidaEdit;
