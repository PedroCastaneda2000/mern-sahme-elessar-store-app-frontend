import {
  useCreateMyProduct,
  useGetMyProduct,
  useUpdateMyProduct,
} from "@/api/MyProductApi";
import ManageProductForm from "@/forms/manage-product-form/ManageProductForm";

const ManageProductPage = () => {
  const { createProduct, isLoading: isCreateLoading } = useCreateMyProduct();
  const productId = "673128c9df4dc2ef1cb19cd5";
  const { product } = useGetMyProduct({ productId });
  const { updateProduct, isLoading: isUpdateLoading } = useUpdateMyProduct({
    productId,
  });
  const isEditing = !!product;
  // const x = product?._id;
  return (
    <ManageProductForm
      product={product}
      onSave={isEditing ? updateProduct : createProduct}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageProductPage;
