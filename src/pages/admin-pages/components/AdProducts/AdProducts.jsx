import { useEffect, useState } from "react";
import "./AdProducts.scss"
import ListProduct from "./components/listProduct/ListProduct";
import AdHeader from "../../../../components/adHeader/AdHeader";
import { deleteProduct, getProduct } from "../../../../platform/api/product-api";
import Modal from "../../../../components/modal/Modal";
import ManageProduct from "./components/manageProduct/ManageProduct";
import { DeleteDialog } from "../../../../components/delete/deleteDialog";


const AdProducts = () => {
    const [isOpen, setIsModal] = useState(false);
    const [product, setProductData] = useState(null);
    const [myProductList, setProductList] = useState([]);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const openEditModal = async (product) => {
        setIsModal(true)
        setProductData(product)
    }

    useEffect(() => {
        getProductListData()
    }, [])

    const getProductListData = async () => {
        const result = await getProduct()
        if (result.data) {
            setProductList(result.data)
        }
    }

    const openDeleteDialog = (item) => {
        setProductData(item)
        setIsOpenDeleteModal(true)
    }
    const handleDeleteProduct = async () => {
        await deleteProduct(product._id);
        setIsOpenDeleteModal(false)
        getProductListData();
        setProductData(null)

    };

    const closeModal = () => {
        setIsModal(false)
        setProductData(null)
    }

    return (
        <div>
            <div className="admin-product-header G-flex-column">
                <AdHeader title='Products' />
                <div className="admin-category">
                    <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Product</button>
                    <div>
                        <ul className="admin-product-list G-justify-between">
                            <li>Product Name</li>
                            <li>Category ID</li>
                            <li>Description</li>
                            <li>Price</li>
                            <li>Count</li>
                            <li>Size</li>
                            <li>Color</li>
                            <li>Actions</li>
                        </ul>
                    </div>

                    <ListProduct
                        myProductList={myProductList}
                        onDeletePicture={openDeleteDialog}
                        onEditProduct={openEditModal}
                    />
                </div>
            </div>
            {isOpen ?
                <Modal onClose={closeModal}>
                    <ManageProduct
                        manageData={product}
                        close={closeModal}
                        updateList={getProductListData}
                    />
                </Modal> : null
            }
            {isOpenDeleteModal ? (
                <Modal
                    onClose={() => {
                        setIsOpenDeleteModal(false)
                        setProductData(null)
                    }}
                    title={"Delete Size"}
                >
                    <DeleteDialog
                        onClose={() => {
                            setIsOpenDeleteModal(false);
                            setProductData(null);
                        }}
                        onDelete={() => handleDeleteProduct()}
                        title={"Are you sure you want to delete?"}
                    />
                </Modal>
            ) : null}

        </div>
    )
}

export default AdProducts;