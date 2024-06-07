import React from 'react'

const SearchPost = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>SEARCH POST</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Post name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">SEARCH POST</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchPost