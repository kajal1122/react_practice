const RickandMorty = (props)=>{
    const {name,species, gender, image} = props;
    return(
        
           <div className="card" style={{width: '28rem' , margin:10}}>
                <img className="card-img-top" src={image} alt="Character card"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{name} is {species} and identifies as {gender}</p>
                    
                </div>
            </div>
            
        
    )
}

export default RickandMorty;