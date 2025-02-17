import Item from '../Item/Item';
import Title from '../Title/Title';
import './ItemListContainer.css';

function ItemListContainer() {
    return (
        <>
        <Title greeting = "Bienvenidos A Nuestra Tienda" />
        <div className="container-cards">
            <Item nombre={"Producto 1"} precio={100} color="red" />
            <Item nombre={"Producto 2"} precio={150} />
            <Item nombre={"Producto 3"} precio={75} />
        </div>
        </>
    );
};

export default ItemListContainer;