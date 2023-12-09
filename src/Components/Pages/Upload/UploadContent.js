import React from "react"
import './UploadContent.css'

export default function UploadContent() {
    return (
        <div className="row">
            <div className="container container0 p-150">
                <div className="d-flex justify-content-center">
                    <h2 className="titlePay center">Upload</h2>
                </div>
                <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form">
                    <div className="form-group1">
                        <label for="name"><i className="fas fa-id-card"></i></label>
                        <input type="number" name="duration" id="duration" placeholder="Product ID" />
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fab fa-product-hunt"></i></label>
                        <input type="text" name="fn" id="fn" placeholder="Product Name" />
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fas fa-money-check-alt"></i></label>
                        <input type="number" name="price" id="price" placeholder="Product Price" />
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fas fa-dollar-sign"></i></label>
                        <input type="text" name="cc" id="cc" placeholder="Price Currency" />
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fas fa-info"></i></label>
                        <input type="text" name="cn" id="cn" placeholder="Product Description" />
                    </div>
                    <div className="form-group1 form-button">
                        <label for="name"><i className="fas fa-file"></i></label>
                        <input type="file" name="up" id="up" multiple="multiple" />
                    </div>
                    <div className="form-group1 form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}