import React from "react";

export const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/500/325" className={"card-img-top"} alt="Ramdon image"/>
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita quas suscipit, vitae in quia maxime alias commodi molestias delectus!</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
        
    );
};
