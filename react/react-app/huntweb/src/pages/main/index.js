import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    state = { // armazena variaveis de estado utilizadas no metodo render
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){ //component mostrado assim que componente for mostrado em tela 
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { // arow function nao subescreve a classe e permite acesso a variavel "this"
        const response = await api.get(`/products?page=${page}`); // complementa o endereço da api
        //console.log(response.data.docs);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page }); //metodo para preencher o array
    };

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo} = this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };


    render() { // fica aguardado alguma variavel associada e atualiza automaticamente 
        //return<h1>Contagem de produtos: {this.state.products.length}</h1> -----inicialmente retornava contagem de produtos
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                    <strong>{product.title}</strong>

                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`}>Acessar</Link>

                    </article>          
            ))}

            <div className="actions" >
                <button disabled={page === 1}onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>


            </div>

            
            </div>
        )
    }
    
}