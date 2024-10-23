import React from "react";

export const Jumbotron = () => {
    return (
        <div className="jumbotron" style={{background:"#add8e6", borderRadius:"10px", padding:"20px"}}>
          <div className="card-body">
            <h2 className="card-title">A WARM WELCOME</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dignissimos quod corporis quaerat veritatis enim fugiat eveniet atque,
                 id consequatur dicta unde possimus placeat corrupti perspiciatis voluptatem, sunt eligendi quia?</p>
              <a href="#" className="btn btn-primary">Call to action!</a>
          </div>
        </div>
    );
};
