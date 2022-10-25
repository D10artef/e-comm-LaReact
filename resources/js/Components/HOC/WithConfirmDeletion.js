import React, { Component } from 'react'
import { Inertia } from '@inertiajs/inertia';
import Modal from '../Portal/Modal';
import { SimpleButton } from '../FormAndButton/Button';
import { toast } from 'react-hot-toast';

const WithConfirmDeletion = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showModal: false,
            };
            this.toast_id = 'toast_success_id'
        }

        openModal = () => {
            this.setState({ showModal: true });
        };

        closeModal = () => {
            this.setState({ showModal: false });
        };

        deleteItem = () => {
            Inertia.delete(this.props.url, {
              onSuccess: () => {
                toast.success('The item is deleted successfully', {
                    id: this.toast_id
                })
              },
              onError: () => {
                console.log('Deletion error');
              }
            })
            this.closeModal()
        };

        render() {
            return (
                <>
                    <WrappedComponent
                        openConfirmation={this.openModal}
                        {...this.props}
                    />
                    {this.state.showModal && (
                        <Modal onClose={this.closeModal}>
                            <div className="bg-gray-100 rounded-sm">
                                <header className="px-6 pt-4 pb-3 border-b">
                                    <h1 className="text-gray-600 text-sm font-medium">
                                        Are you sure to delete this item?
                                    </h1>
                                </header>
                                <footer className="px-6 py-3 flex justify-end items-center gap-3">
                                    <SimpleButton
                                        className="bg-gray-500 text-white hover:bg-neutral-500 duration-500 font-light rounded-sm"
                                        icon="x-close"
                                        iconClass="w-4 h-4"
                                        onClick={this.closeModal}
                                    >
                                        Cancel
                                    </SimpleButton>
                                    <SimpleButton
                                        className="bg-rose-500 text-white hover:bg-red-500 duration-500 font-light rounded-sm"
                                        icon="simple-check"
                                        onClick={this.deleteItem}
                                    >
                                        Continue
                                    </SimpleButton>
                                </footer>
                            </div>
                        </Modal>
                    )}
                </>
            );
        }
    };
};

export default WithConfirmDeletion;