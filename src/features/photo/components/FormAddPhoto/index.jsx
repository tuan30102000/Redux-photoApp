import { React, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
FormAddPhoto.propTypes = {
    onSubmitFc: PropTypes.func.isRequired,
    valueTitle: PropTypes.string,
    valueCategory: PropTypes.number,
    srcImg: PropTypes.string,
};
FormAddPhoto.defaultProps = {
    srcImg: 'https://picsum.photos/id/0001/300/300',
    valueTitle: '',
    valueCategory: 1
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function FormAddPhoto(props) {
    const { valueTitle, onSubmitFc, srcImg, valueCategory, onSubmit } = props
    const [imgLink, setimgLink] = useState(srcImg)
    const form = useForm({
        defaultValues: {
            title: valueTitle,
            category: valueCategory
        }
    })
    const handleRandomBtnClick = () => {
        setimgLink(getRandomImageUrl)
    }
    const { register, handleSubmit, formState } = form
    const { touchedFields, errors } = formState
    let hasErros = touchedFields['title'] && errors['title']
    const [errorState, seterrorState] = useState(false)
    const handleShowDataSubmit = function (data) {
        data.img = imgLink
        if (onSubmitFc) onSubmitFc(data)
    }
    return (
        <div className="layout">
            <div className="layout-box form-box">
                <form
                    onSubmit={handleSubmit(handleShowDataSubmit)}
                >
                    <div className={classNames({
                        'form-group': true,
                        'invalid': !!hasErros,
                    })}>
                        <label htmlFor="title">title</label>
                        <input
                            type="text"
                            id='title'
                            name='title'
                            className="form-control"
                            {...register('title', {
                                required: 'Vui long nhap title',
                                maxLength: {
                                    value: 10,
                                    message: 'Nhập tối thiểu 10 kí tự'
                                }
                            })}
                        />
                        {!!hasErros && <p>{errors['title']?.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category"
                            id="category"
                            className="form-control"
                            {...register('category')}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>

                        <div className="button-box"
                            disabled={errorState}
                            onClick={() => {
                                handleRandomBtnClick()
                            }}

                        >
                            <span>Random a Photo</span>
                        </div>
                        <div className="img-box">
                            <img
                                onLoad={(e) => { seterrorState(false) }}
                                onError={(e) => {
                                    seterrorState(true)
                                    e.preventDefault()
                                    handleRandomBtnClick()
                                }}
                                src={imgLink} alt="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button disabled={(!!hasErros) || errorState} className='submit-btn'>Add Your Photo</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default FormAddPhoto;