import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Mousewheel, Pagination
} from 'swiper';
import Buttons from '../components/Buttons/Buttons';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

SwiperCore.use([Mousewheel, Pagination]);

export default function MakeOffer(props) {
    // const [materials, setMaterials] = useState();
    const [realData, setRealData] = useState([]);
    const [name, setName] = useState(true)
    const [errorSlide1, setErrorSlide1] = useState(false)
    const [errorSlide2, setErrorSlide2] = useState(false)
    const [errorSlide3, setErrorSlide3] = useState(false)
    const [btnEdit, setBtnEdit] = useState(false)
    const [userInfo, setUserInfo] = useState("")
    const [selectedTitle, setSelectedTitle] = useState()
    const [selectedCompanyName, setSelectedCompanyName] = useState()
    const [selectedProfitRate, setSelectedProfitRate] = useState()
    const [selectedDate, setSelectedDate] = useState()
    const [selectedUserName, setSelectedUserName] = useState()
    const [selectedRowID, setSelectedRowID] = useState(-1)
    const [selectedMaterials, setSelectedMaterials] = useState([])
    const [offerID, setOfferID] = useState(-1)
    // const [updated_material_price_per_unit, setPrice_per_unit] = useState()
    // const [updated_material_unit_quantity, setUnit_quantity] = useState()
    const id = useSelector((state) => state.auth.userID);
    let values = {
        user_id: id,
    };

    const [my_swiper, set_my_swiper] = useState({});

    const handleClose = () => {
        setErrorSlide1(false);
        setErrorSlide2(false)
        setErrorSlide3(false)
    }

    useEffect(() => {

        fetch(`http://localhost:8080/api/user/getFullName`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                setUserInfo(data.data)
            });

        document.getElementById('custom-date').valueAsDate = new Date();
    }, []);

    function nameHandler() {
        setName(!name)
        let x = document.getElementById("name")
        // x.value = ""
    }

    function fetchForSlide2() {
        fetch("http://localhost:8080/api/material/getMaterialByUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                const temp = new Array()
                for (let i = 0; i < data.length; i++) {
                    let newElement = {
                        material_id: data[i].material_id,
                        material_name: data[i].material_name,
                        material_is_verified: data[i].material_is_verified,
                        material_unit: data[i].material_unit,
                        material_price_per_unit: 0,
                        material_unit_quantity: 0,
                    }
                    temp.push(newElement)
                }
                // console.log(temp);
                setRealData(temp)
            });

    }

    function updateTable() {
        // console.log(realData[selectedRowID]);
        realData[selectedRowID].material_price_per_unit = document.getElementById("price_per_unit").value
        realData[selectedRowID].material_unit_quantity = document.getElementById("unit_quantity").value
        // console.log(realData);
        setBtnEdit(false)
    }

    function nextSlide(e) {
        my_swiper.slideNext()
    }

    function prevSlide(e) {
        e.preventDefault()
        my_swiper.slidePrev()
    }

    function checkSlide1() {
        let inputs = new Array();

        let offer_title = document.getElementById("offer-title")
        let company_name = document.getElementById("company-name")
        let date = document.getElementById("custom-date")
        let profit_rate = document.getElementById("profit-rate")
        let name = document.getElementById("name")

        inputs.push(offer_title)
        inputs.push(company_name)
        inputs.push(date)
        inputs.push(name)
        inputs.push(profit_rate)

        let flag = true;

        inputs.forEach(element => {
            if (element.value == "") {
                flag = false
            }
        });

        if (flag) {
            setSelectedDate(date.value)
            setSelectedTitle(offer_title.value)
            setSelectedCompanyName(company_name.value)
            setSelectedProfitRate(profit_rate.value)
            setSelectedUserName(name.value)
        }

        return flag;
    }

    function checkSlide2() {
        let checkboxs = document.getElementsByClassName("checkboxs")
        const checked = []
        for (let i = 0; i < checkboxs.length; i++) {
            const item = checkboxs[i];
            if (item.checked)
                checked.push(item)
        }
        // console.log(checked);
        if (checked.length == 0) {
            setErrorSlide2(true)
            return false
        }
        else {
            const selectedMaterials = []
            for (let i = 0; i < checked.length; i++) {
                const element = checked[i];
                if (element.parentElement.nextElementSibling.nextElementSibling.textContent == 0 ||
                    element.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent == 0) {
                    setErrorSlide3(true)
                    return false
                }
                // console.log(element.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
                selectedMaterials.push({
                    material_id: element.parentElement.parentElement.id,
                    material_name: element.parentElement.nextElementSibling.textContent,
                    material_is_verified: 1,
                    material_unit: element.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
                    material_price_per_unit: element.parentElement.nextElementSibling.nextElementSibling.textContent.trim(),
                    material_unit_quantity: element.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent.trim(),
                })
            }
            setSelectedMaterials(selectedMaterials)
            return true
        }
    }

    return (
        <React.Fragment>
            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={1} mousewheel={false}
                allowTouchMove={false}
                pagination={{
                    "type": "progressbar"
                }}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
                className="mySwiper">
                <SwiperSlide className="overflow-auto pt-5">
                    <div className="col-10 col-xl-5 col-lg-6 col-md-7 col-sm-8">
                        <div className="mb-3 text-product">
                            <label className="form-label" htmlFor="offer-title">TEKLİFİN BAŞLIĞI:</label>
                            <input className="form-control" placeholder="Örnek:  Alt Yapı İmalatı" type="text" id="offer-title" name="offer-title" />
                        </div>

                        <div className="mb-3 text-product">
                            <label className="form-label" htmlFor="company-name">TEKLİF YAPILACAK ŞİRKET YA DA ŞAHIS:</label>
                            <input className="form-control" placeholder="Örnek:  Sayın ABC İnşaat Yetkilisi" type="text" id="company-name" name="company-name" />
                        </div>

                        <div className="mb-3 text-product row">
                            <label className="col-3 col-form-label" htmlFor="custom-date">TARİH:</label>
                            <div className="col-9">
                                <input className="form-control" type="date" id="custom-date" name="custom-date" />
                            </div>
                        </div>

                        <div className="mb-3 text-product row">
                            <label className="col-lg-3 col-form-label" htmlFor="profit-rate">KAR ORANI:</label>
                            <div className="col-lg-9">
                                <input className="form-control" placeholder="Örnek: 20" type="number" defaultValue="0" min="0" id="profit-rate" name="profit-rate" />
                            </div>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" id="show-profit-rate" name="show-profit-rate" />
                            <label className="form-check-label" htmlFor="show-profit-rate">Kar oranı teklifte görünsün.</label>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" id="name-check" name="name-check" onClick={nameHandler} />
                            <label className="form-check-label" htmlFor="name-check">Farklı bir kişi adına teklif yapacağım.</label>
                        </div>

                        <div className={name ? "d-none" : "mb-3 text-product row"}>
                            <label className="col-lg-3 col-form-label" htmlFor="name">Ad Soyad:</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="text" defaultValue={userInfo} id="name" name="name" />

                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary slide-btn p-0 mb-4" onClick={async (e) => {
                                e.preventDefault()
                                if (checkSlide1()) {
                                    await fetchForSlide2()
                                    nextSlide(e)
                                }
                                else {
                                    setErrorSlide1(true)
                                }
                            }}> <i className="bi bi-arrow-down" style={{ fontSize: 1.3 + 'rem' }}></i> </button>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="overflow-auto pt-5">
                    <div className="col-11 col-xl-8 col-lg-9 col-md-10 col-sm-11">
                        <div className="d-flex justify-content-center mb-3">
                            <button className="btn btn-primary slide-btn p-0" onClick={(e) => prevSlide(e)}> <i className="bi bi-arrow-up" style={{ fontSize: 1.3 + 'rem' }}></i> </button>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Malzemenin İsmi</th>
                                    <th>Birim Fiyatı</th>
                                    <th>Ölçü Birimi</th>
                                    <th>Birim Miktarı</th>
                                    <th className="text-center">Düzenle</th>
                                </tr>
                            </thead>
                            <tbody id="tableRows">
                                {realData.map((e, i) =>
                                    <tr key={e.material_id} id={e.material_id} >
                                        <td className="text-center"> <input className="form-check-input checkboxs" type="checkbox" /> </td>
                                        <td>{e.material_name}</td>
                                        <td>{e.material_price_per_unit} </td>
                                        <td>{e.material_unit}</td>
                                        <td>{e.material_unit_quantity} </td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-success" onClick={(e) => {
                                                    e.preventDefault()
                                                    setSelectedRowID(i)
                                                    setBtnEdit(true)
                                                }} ><i className="bi bi-pencil-square"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary slide-btn p-0 mb-4" onClick={(e) => {
                                e.preventDefault()
                                if (checkSlide2())
                                    nextSlide(e)
                            }}> <i className="bi bi-arrow-down" style={{ fontSize: 1.3 + 'rem' }}></i> </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="overflow-auto pt-5">
                    <div className="col-11 col-xl-8 col-lg-9 col-md-10 col-sm-11">
                        <div className="d-flex justify-content-center mb-3">
                            <button className="btn btn-primary slide-btn p-0" onClick={(e) => prevSlide(e)}> <i className="bi bi-arrow-up" style={{ fontSize: 1.3 + 'rem' }}></i> </button>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Malzemenin İsmi</th>
                                    <th>Birim Fiyatı</th>
                                    <th>Ölçü Birimi</th>
                                    <th>Birim Miktarı</th>
                                    <th>Toplam Malzeme Tutarı</th>
                                </tr>
                            </thead>
                            <tbody id="tableRows">
                                {selectedMaterials.map((e, i) =>
                                    <tr key={i} >
                                        <td>{i + 1}</td>
                                        <td>{e.material_name}</td>
                                        <td>{e.material_price_per_unit} </td>
                                        <td>{e.material_unit}</td>
                                        <td>{e.material_unit_quantity} </td>
                                        <td>{e.material_unit_quantity * e.material_price_per_unit} </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                        <div className="d-flex justify-content-end">
                            <button className="btn btn-success mb-4" onClick={(e) => {
                                const makeOffer1 = async () => {
                                    const settings = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            offer_title: selectedTitle,
                                            offer_company_name: selectedCompanyName,
                                            offer_status: false,
                                            offer_total_price: 0,
                                            offer_date: selectedDate,
                                            offer_profit_rate: selectedProfitRate,
                                            offer_username: selectedUserName,
                                            user: {
                                                user_id: values.user_id
                                            }
                                        }),
                                    }
                                    try {
                                        const fetchResponse = await fetch(`http://localhost:8080/api/offer/make`, settings);
                                        const data = await fetchResponse.json();
                                        return data;
                                    } catch (e) {
                                        return e;
                                    }
                                }

                                setOfferID(makeOffer1())



                            }}>Teklif Yap </button>
                            <button className="btn btn-success" onClick={() => {


                                const makeOffer2 = async (offer_id, material) => {
                                    const settings = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            material: {
                                                material_id: material.material_id
                                            },
                                            offer: {
                                                offer_id: offer_id
                                            },
                                            offer_material_price_per_unit: material.material_price_per_unit,
                                            offer_material_unit_quantity: material.material_unit_quantity
                                        }),
                                    }
                                    try {
                                        const fetchResponse = await fetch(`http://localhost:8080/api/offerMaterial/make`, settings);
                                        const data = await fetchResponse.json();
                                        return data;
                                    } catch (e) {
                                        return e;
                                    }
                                }

                                for (let i = 0; i < selectedMaterials.length; i++) {
                                    const element = selectedMaterials[i];
                                    console.log(makeOffer2(offerID, element))
                                    console.log(i + 1);
                                }

                            }
                            } >Teklif Yap2</button>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>


            <Modal show={errorSlide1 || errorSlide2 || errorSlide3} onHide={handleClose} centered>
                <Modal.Header className="bg-opacity-75 bg-danger" closeButton>
                    <Modal.Title>Hata</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {errorSlide1 && "Bazı gerekli alanlar boş, lütfen eksiksiz doldurduğunuza emin olun!"
                    }
                    {errorSlide2 && "En az 1 öğe seçilmelidir!"
                    }
                    {errorSlide3 && "En az bir satırın birim fiyatı ya da birim miktarı sıfır!"
                    }
                </Modal.Body>
            </Modal>

            <Modal show={btnEdit} onHide={() => setBtnEdit(false)} centered>
                <Modal.Header className="bg-opacity-75 bg-warning" closeButton>
                    <Modal.Title>Düzenle ~ <span className="h6">{realData.length != 0 && selectedRowID != -1 ? realData[selectedRowID].material_name : ""}</span> </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Container>
                        <Row>
                            <Col md={4} >
                                <label className="col-form-label" htmlFor="price_per_unit">Birim Fiyatı :</label>
                            </Col>
                            <Col>
                                <input className="form-control" min="0" defaultValue={realData.length != 0 && selectedRowID != -1 ? realData[selectedRowID].material_price_per_unit : " "} id="price_per_unit" name="price_per_unit" type="number" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={4}>
                                <label className="col-form-label" htmlFor="unit_quantity">Birim Miktarı :</label>
                            </Col>
                            <Col>
                                <input className="form-control" min="0" defaultValue={realData.length != 0 && selectedRowID != -1 ? realData[selectedRowID].material_unit_quantity : " "} id="unit_quantity" name="unit_quantity" type="number" />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Container>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" onClick={updateTable} >Kaydet</button>
                        </div>
                    </Container>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}
