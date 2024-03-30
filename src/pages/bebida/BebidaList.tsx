import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, addCircle, addCircleOutline, addCircleSharp, addOutline, close, pencil } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { useEffect, useState } from 'react';
import { removeBebida, saveBebida, searchBebidas } from './BebidaApi';
import Bebida from './Bebida';

const BebibaList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [bebidas, setBebidas] = useState<Bebida[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  },[history.location.pathname]);

  const search =  async () => {
    let result = searchBebidas();
    setBebidas(result);
  }

  const remove = async (id:string) => {
    removeBebida(id);
    search();
  }

  const pruebaLocal = () => {
    const ejemplo = {
      id:'1',
      nombre:'fernet',
      medida:'740',
      tipo: 'aperitivo',
      marca:'branca',
      cantStock:'12',
      precioCompra: '200',
      precioVenta: '1233'
    }
    saveBebida(ejemplo);
  }


  const addBebida = () => {
      history.push('/folder/bebida/new');
  }

  const editBebida = (id:string) => {
    history.push('/folder/bebida/' + id);
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
          <IonTitle>Gestion De Bebidas</IonTitle>

          <IonItem>
            <IonButton color={'primary'} slot='end'
            onClick={addBebida} >
            <IonIcon icon={addOutline} slot='icon-only'/>
              Agregar Bebida
            </IonButton>
          </IonItem>

        
      <IonGrid className='table'>
        <IonRow>
          <IonCol>Bebida</IonCol>
          <IonCol>Medida</IonCol>
          <IonCol>Tipo Bebida</IonCol>
          <IonCol>Marca</IonCol>
          <IonCol>Cant Stock</IonCol>
          <IonCol>Precio Compra</IonCol>
          <IonCol>Precio Venta</IonCol>
          <IonCol>Acciones</IonCol>
        </IonRow>
   
        {bebidas.map((bebida: Bebida) =>
        <IonRow>
          <IonCol>{bebida.nombre}</IonCol>
          <IonCol>{bebida.medida}</IonCol>
          <IonCol>{bebida.tipoBebida}</IonCol>
          <IonCol>{bebida.marca}</IonCol>
          <IonCol>{bebida.cantStock}</IonCol>
          <IonCol>{bebida.precioCompra}</IonCol>
          <IonCol>{bebida.precioVenta}</IonCol>

          <IonCol>
            <IonButton color='primary' fill= 'solid'
              onClick={() => editBebida(String(bebida.id))}>
              <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>

            <IonButton color='danger' fill= 'solid'
            onClick={() => remove(String(bebida.id))}>
              <IonIcon icon={close} slot='icon-only'/>
            </IonButton>
          </IonCol>

        </IonRow>
        )}
  
        </IonGrid>
      </IonCard>


      <IonButton onClick={pruebaLocal} fill= 'clear' >
              Prueba
            </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default BebibaList;
