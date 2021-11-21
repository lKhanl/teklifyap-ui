import React, { useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import Offers from './pages/Offers';

import ReactToPdf from 'react-to-pdf';
import {html2pdf} from "html2pdf.js";
const Example = () => {
useEffect(() => {
  window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            window.onload = function () {
              document.getElementById("download")
                  .addEventListener("click", () => {
                      const invoice = this.document.getElementById("invoice");
                      console.log(invoice);
                      console.log(window);
                      var opt = {
                          margin: 1,
                          filename: 'myfile.pdf',
                          image: { type: 'jpeg', quality: 0.98 },
                          html2canvas: { scale: 2 },
                          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                      };
                      html2pdf().from(invoice).set(opt).save();
                  })
          }
        })
}
}, [])

  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">
    <div className="row">
        <div className="col-md-12 text-right mb-3">
            <button className="btn btn-primary" id="download"> download pdf</button>
        </div>
        <div className="col-md-12">
            <div className="card" id="invoice">
                <div className="card-header bg-transparent header-elements-inline">
                    <h6 className="card-title text-primary">Sale invoice</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-4 pull-left">

                                <ul className="list list-unstyled mb-0 text-left">
                                    <li>2269 Six Sigma</li>
                                    <li>New york city</li>
                                    <li>+1 474 44737 47 </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-4 ">
                                <div className="text-sm-right">
                                    <h4 className="invoice-color mb-2 mt-md-2">Invoice #BBB1243</h4>
                                    <ul className="list list-unstyled mb-0">
                                        <li>Date: <span className="font-weight-semibold">March 15, 2020</span></li>
                                        <li>Due date: <span className="font-weight-semibold">March 30, 2020</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex flex-md-wrap">
                        <div className="mb-4 mb-md-2 text-left"> <span className="text-muted">Invoice To:</span>
                            <ul className="list list-unstyled mb-0">
                                <li>
                                    <h5 className="my-2">Tibco Turang</h5>
                                </li>
                                <li><span className="font-weight-semibold">Samantha Mutual funds Ltd</span></li>
                                <li>Gurung Street</li>
                                <li>23 BB Lane</li>
                                <li>Hong kong</li>
                                <li>234 456 5678</li>
                                <li><a href="#" data-abc="true">tibco@samantha.com</a></li>
                            </ul>
                        </div>
                        <div className="mb-2 ml-auto"> <span className="text-muted">Payment Details:</span>
                            <div className="d-flex flex-wrap wmin-md-400">
                                <ul className="list list-unstyled mb-0 text-left">
                                    <li>
                                        <h5 className="my-2">Total Due:</h5>
                                    </li>
                                    <li>Bank name:</li>
                                    <li>Country:</li>
                                    <li>City:</li>
                                    <li>Address:</li>
                                    <li>IBAN:</li>
                                    <li>SWIFT code:</li>
                                </ul>
                                <ul className="list list-unstyled text-right mb-0 ml-auto">
                                    <li>
                                        <h5 className="font-weight-semibold my-2">$1,090</h5>
                                    </li>
                                    <li><span className="font-weight-semibold">Hong Kong Bank</span></li>
                                    <li>Hong Kong</li>
                                    <li>Thurnung street, 21</li>
                                    <li>New standard</li>
                                    <li><span className="font-weight-semibold">98574959485</span></li>
                                    <li><span className="font-weight-semibold">BHDHD98273BER</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-lg">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Rate</th>
                                <th>Hours</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="mb-0">Arts and design template</h6> <span className="text-muted">in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.Duis aute irure dolor in reprehenderit</span>
                                </td>
                                <td>$120</td>
                                <td>180</td>
                                <td><span className="font-weight-semibold">$300</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="mb-0">Template for desnging the arts</h6> <span className="text-muted">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                                </td>
                                <td>$140</td>
                                <td>100</td>
                                <td><span className="font-weight-semibold">$240</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="mb-0">Technical support international</h6> <span className="text-muted">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                                </td>
                                <td>$250</td>
                                <td>$250</td>
                                <td><span className="font-weight-semibold">$500</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body">
                    <div className="d-md-flex flex-md-wrap">
                        <div className="pt-2 mb-3 wmin-md-400 ml-auto">
                            <h6 className="mb-3 text-left">Total due</h6>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th className="text-left">Subtotal:</th>
                                            <td className="text-right">$1,090</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Tax: <span className="font-weight-normal">(25%)</span></th>
                                            <td className="text-right">$27</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Total:</th>
                                            <td className="text-right text-primary">
                                                <h5 className="font-weight-semibold">$1,160</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-right mt-3"> <button type="button" className="btn btn-primary"><b><i className="fa fa-paper-plane-o mr-1"></i></b>
                                    Send invoice</button> </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer"> <span className="text-muted">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.Duis aute irure dolor in reprehenderit</span> </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Example;