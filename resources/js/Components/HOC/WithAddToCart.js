import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const WithAddToCart = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                disable: false,
            };
            this.toast_error_id = "error_id";
        }

        addProductToCart = async (id) => {
            const response = await axios.post(route("user.cart.add-item", id));
            return response;
        };

        handleAddToCart = () => {
            this.setState({ disable: true });

            if (this.props.auth.user) {
                const { id, name } = this.props.product;
                const res = this.addProductToCart(id);
                res.then((response) => {
                    if (response.status === 201) {
                        toast.success(`${name} is added in your cart`);
                    }
                    this.setState({ disable: false });
                }).catch(() => {
                    toast.error("Add failed");
                    this.setState({ disable: false });
                });
            } else {
                toast.error("You need to login", {
                    id: this.toast_error_id,
                });
                // toast.custom(<AuthNotification />, {
                //     id: this.toast_error_id,
                // })
                this.setState({ disable: false });
            }
        };

        render() {
            return (
                <WrappedComponent
                    disable={this.state.disable}
                    onAddToCart={this.handleAddToCart}
                    {...this.props}
                />
            );
        }
    };
};

export default WithAddToCart;