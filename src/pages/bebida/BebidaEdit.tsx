import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, addCircle, addCircleOutline, addCircleSharp, bagAddOutline, bookmark, checkmark, close, pencil, save } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { useEffect, useState } from 'react';
import { removeBebida, saveBebida, saveBebidaById, searchBebidas } from './BebidaApi';
import Bebida from './Bebida';
import { addPlatform } from '@capacitor/core';
import { addIcons } from 'ionicons';

const BebidaEdit: React.FC = () => {

  const { name,id } = useParams<{ name: string; id: string; }>();
  const [bebida, setBebida] = useState<Bebida>({});
  const history = useHistory();

  useEffect(() => {
    search();
  },[]);

  const search = async () => {
    if (id !== 'new'){
      if (id === 'new') {
        setBebida({});
      } else {
        // let result = await searchBebidaById(id);
        // setBebida(result);
      }
    }

  }

  const save = async () =>{
    await saveBebida(bebida);
    history.push('/folder/bebida');
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
          <IonTitle>{id === 'new' ? 'Agregar Bebiba': 'Editar Bebida'}</IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Nombre</IonLabel>
                <IonInput onIonChange={b => bebida.nombre = String(b.detail.value)}
                value={bebida.nombre}></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Marca</IonLabel>
                <IonInput onIonChange={b => bebida.marca = String(b.detail.value)}
                value={bebida.precioCompra}></IonInput>
              </IonItem>              
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Medida</IonLabel>
                <IonInput onIonChange={b => bebida.medida = String(b.detail.value)}
                value={bebida.medida}></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Tipo de Bebida</IonLabel>
                <IonInput onIonChange={b => bebida.tipoBebida = String(b.detail.value)}
                value={bebida.tipoBebida}></IonInput>
              </IonItem>              
            </IonCol> 
          </IonRow>
            
            


         




          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Precio Compra</IonLabel>
                <IonInput onIonChange={b => bebida.precioCompra = String(b.detail.value)}
                value={bebida.precioCompra}></IonInput>
              </IonItem>              
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Precio Venta</IonLabel>
                <IonInput onIonChange={b => bebida.precioVenta = String(b.detail.value)}
                value={bebida.precioVenta}></IonInput>
              </IonItem>              
            </IonCol>
          </IonRow>
          
          










          <IonItem>
            <IonButton onClick={save} color={'success'} slot='end' size='default'>
              <IonIcon icon={checkmark}/>
              Guardar
            </IonButton>
          </IonItem>

        
   
      </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default BebidaEdit;
