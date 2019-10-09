import React, { useState } from 'react';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
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

<label htmlFor="company">VALOR DA DIARIA * <span>(EM breakpointObject() {
    // Use in computed property
    switch (th.breakpoint.name) {
        case 'xs': return '220px'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '800px'
    }
})</span> </label>
            <input
                id="techs"
                placeholder="Quais Tecnologias Usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            
        </form>
    );
}