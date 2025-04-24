export const styles = {
    // Layout styles
    pageContainer: 'min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8',
    innerContainer: 'max-w-4xl mx-auto',
    title: 'text-3xl font-bold text-gray-900 mb-8',
    cartContainer: 'bg-white shadow rounded-lg overflow-hidden',

    // Empty cart styles
    emptyCartContainer: 'min-h-screen flex flex-col items-center justify-center bg-gray-50',
    emptyCartContent: 'max-w-md w-full bg-white p-8 rounded-xl shadow-sm text-center',
    emptyCartTitle: 'text-2xl font-bold text-gray-800 mb-4',
    emptyCartText: 'text-gray-600 mb-6',
    emptyCartButton: 'inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors',

    // Cart item styles
    itemContainer: 'p-4 sm:p-6 flex flex-col sm:flex-row',
    itemImage: 'flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-24 h-24 object-cover rounded-lg',
    itemContent: 'flex-grow',
    itemTitle: 'text-lg font-semibold text-gray-800',
    itemPrice: 'text-lg font-medium text-gray-900',
    itemPriceEach: 'text-gray-600 mt-1',

    // Quantity controls - enlarged version
    quantityContainer: 'mt-4 flex items-center gap-4',
    quantityGroup: 'flex items-center bg-white rounded-xl shadow-sm overflow-hidden h-14 border border-gray-200',
    quantityButton: 'flex items-center justify-center w-14 h-14 text-gray-600 text-lg',
    minusButton: 'hover:bg-red-200 hover:text-red-700',
    plusButton: 'hover:bg-green-200 hover:text-green-700',
    quantityDisplay: 'px-4 text-lg font-semibold min-w-[40px] text-center',
    removeButton: 'w-14 h-14 flex items-center justify-center hover:bg-red-200 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-800',

    // Order summary styles
    summaryContainer: 'bg-gray-50 px-4 py-6 sm:p-6',
    summaryTitle: 'text-lg font-medium text-gray-900 mb-4',
    summaryRow: 'flex justify-between',
    summaryLabel: 'text-gray-600',
    summaryValue: 'font-medium',
    freeShipping: 'text-green-600',
    totalRow: 'flex justify-between border-t border-gray-200 pt-4',
    totalLabel: 'text-lg font-medium',
    totalValue: 'text-lg font-bold',
    checkoutButton: 'w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    continueShopping: 'text-center mt-4',
    continueLink: 'text-blue-600 hover:text-blue-800 text-sm font-medium'
};