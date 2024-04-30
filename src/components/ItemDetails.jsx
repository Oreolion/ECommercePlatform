import {  useParams } from 'react-router-dom';


const ItemDetails = () => {
    let {id} = useParams()
    console.log(id)
  return (
    <>
      <div className="">
        <div className="innerbox">
          <div className="imgbox">
            <img src="imgbox" alt="img" />
          </div>
          <h3>{id}</h3>
          <h3 className="price">${}</h3>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
