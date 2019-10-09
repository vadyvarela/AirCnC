import React, { useState, useMemo } from 'react';
import './style.css';
import camera from '../../assets/camera.svg';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        }, [thumbnail]
    )

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label 
            id="thumbnail" 
            style={{ backgroundImage: `url(${preview})` }}
        }

            >
                <input
                    type="file"
                    onChange={event => setThumbnail(event.target.files[0])}
                />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa incrivel"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="company">TECNOLOGIAS * <span>(separadas por virgulas)</span> </label>
            <input
                id="techs"
                placeholder="Quais Tecnologias Usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="company">VALOR DA DIARIA * <span>(em branco para GRATUITO)</span> </label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn"> Cadastrar</button>

        </form>
    );
}