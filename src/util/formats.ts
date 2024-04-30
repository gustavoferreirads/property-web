

export const formatCurrency = (price: number)=>{
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(price)
}

export const formatDate = (dateStr: string | Date) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
};