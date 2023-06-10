import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { removeArticle } from "../../../store/articles";

const ModalCard = ({ active, setActive }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { articleId } = useParams();
    const handleClick = () => {
        setActive(false);
        dispatch(removeArticle(articleId));
        history.goBack();
    };

    const handleBack = () => {
        setActive(false);
    };
    return (
        <Modal show={active} onHide={ () => { setActive(false); } }>
            <Modal.Body>
                <h1 className="text-center">
                    <i className="bi bi-exclamation-triangle text-danger"></i>
                    {" "}Удалить запись?{" "}
                    <div className="d-grid gap-2 d-md-block">
                        <Button className="btn-lg mx-2" variant="secondary" type="submit" onClick={handleBack}>
                            Отменить
                        </Button>
                        <Button className="btn-lg mx-2 w-50" variant="danger" type="reset" onClick={handleClick}>
                            Ok
                        </Button>
                    </div>
                </h1>
            </Modal.Body>
        </Modal>
    );
};

ModalCard.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
};

export default ModalCard;
