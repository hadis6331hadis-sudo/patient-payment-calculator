document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // دریافت مقادیر از فیلدهای فرم
    const basePrice = parseFloat(document.getElementById('basePrice').value);
    const insurancePrice = parseFloat(document.getElementById('insurancePrice').value);
    const additionalCost = parseFloat(document.getElementById('additionalCost').value);

    // محاسبه قیمت پرداختی بیمار
    const paymentPrice = (basePrice - insurancePrice) + additionalCost;

    // نمایش نتیجه
    document.getElementById('paymentPrice').innerText = paymentPrice.toLocaleString('fa-IR');
});
