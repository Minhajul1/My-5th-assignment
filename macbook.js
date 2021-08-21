
// document.getElementById('memory-btn-8').addEventListener('click',function(){
//     const memoryCost = document.getElementById('memory-cost');
//     const newMemoryCost = '0';
//     let memoryCosts = parseInt(newMemoryCost);
//     memoryCost.innerText = memoryCosts;
// });
document.getElementById('memory-btn-16').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    const newMemoryCost = '100';
    const memoryCosts = parseInt(newMemoryCost);
    memoryCost.innerText = memoryCosts;
});
document.getElementById('storage-256').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = '0';
    const storageCosts = parseInt(newStorageCost);
    storageCost.innerText = storageCosts;
});
document.getElementById('storage-512').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = '180';
    const storageCosts = parseInt(newStorageCost);
    storageCost.innerText = storageCosts;
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = '300';
    const storageCosts = parseInt(newStorageCost);
    storageCost.innerText = storageCosts;
});
document.getElementById('delivery-regular').addEventListener('click',function(){
    const deliveryRegular = document.getElementById('delivery-cost');
    deliveryRegular.innerText = '0';
});
document.getElementById('delivery-urgent').addEventListener('click',function(){
    const deliveryUrgent= document.getElementById('delivery-cost');
    deliveryUrgent.innerText = '20';
});

// const total = document.getElementById('total-price').innerText;
// const totalPrice = parseInt(total);
// const grandTotal = totalPrice + memoryCosts + storageCosts;
// console.log(grandTotal)
