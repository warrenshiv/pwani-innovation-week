import React from 'react'
import "../../assets/scss/theme.scss"
import "../../assets/css/theme.css"
const Statsblock = () => {
  return (
    <>
        <div className="stats-block theme-bg-primary text-white py-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="item">
                            <div className="number">3000+</div>
                            <div className="unit">Delegates</div>
                        </div>
                        {/* <!--//item--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div className="col-6 col-md-3">
                        <div className="item">
                            <div className="number">5</div>
                            <div className="unit">Days</div>
                        </div>
                        {/* <!--//item--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div className="col-6 col-md-3">
                        <div class="item">
                            <div className="number">50+</div>
                            <div className="unit">Sessions</div>
                        </div>
                        {/* <!--//item--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div className="col-6 col-md-3">
                        <div className="item">
                            <div className="number">10+</div>
                            <div className="unit">Exhibitors</div>
                        </div>
                        {/* <!--//item--> */}
                    </div>
                    {/* <!--//col--> */}
                </div>
            </div>
            {/* <!--//container--> */}
        </div>
        {/* <!--//stats-block--> */}
  </>
  )
}

export default Statsblock