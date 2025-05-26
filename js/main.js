let arr = [];

function addNumber() {
    const input = document.getElementById('numberInput');
    const value = Number(input.value);
    if (!isNaN(value)) {
        arr.push(value);
        updateArrayDisplay();
        input.value = '';
    }
}

function updateArrayDisplay() {
    document.getElementById('arrayDisplay').textContent = `[${arr.join(', ')}]`;
}

// 1. Tổng số dương
function sumPositive() {
    const sum = arr.reduce((total, num) => num > 0 ? total + num : total, 0);
    showResult(`Tổng số dương: ${sum}`);
}

// 2. Đếm số dương
function countPositive() {
    const count = arr.filter(num => num > 0).length;
    showResult(`Có ${count} số dương`);
}

// 3. Số nhỏ nhất
function findMin() {
    if (arr.length === 0) return showResult('Mảng rỗng');
    const min = Math.min(...arr);
    showResult(`Số nhỏ nhất: ${min}`);
}

// 4. Số dương nhỏ nhất
function findMinPositive() {
    const posArr = arr.filter(num => num > 0);
    if (posArr.length === 0) return showResult('Không có số dương');
    const min = Math.min(...posArr);
    showResult(`Số dương nhỏ nhất: ${min}`);
}

// 5. Số chẵn cuối
function findLastEven() {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) return showResult(`Số chẵn cuối cùng: ${arr[i]}`);
    }
    showResult('Không có số chẵn, trả về -1');
}

// 6. Đổi chỗ vị trí
function swapPositions() {
    const pos1 = parseInt(document.getElementById('pos1').value);
    const pos2 = parseInt(document.getElementById('pos2').value);
    if (isNaN(pos1) || isNaN(pos2) || pos1 < 0 || pos2 < 0 || pos1 >= arr.length || pos2 >= arr.length) {
        return showResult('Vị trí không hợp lệ');
    }
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
    updateArrayDisplay();
    showResult(`Đã đổi chỗ phần tử ở vị trí ${pos1} và ${pos2}`);
}

// 7. Sắp xếp tăng dần
function sortArray() {
    arr.sort((a, b) => a - b);
    updateArrayDisplay();
    showResult('Đã sắp xếp mảng');
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function findFirstPrime() {
    const prime = arr.find(num => isPrime(num));
    showResult(prime !== undefined ? `Số nguyên tố đầu tiên: ${prime}` : 'Không có số nguyên tố, trả về -1');
}

// 9. Đếm số nguyên trong mảng số thực
function countIntegersInFloatArray() {
    const input = document.getElementById('floatArrayInput').value;
    const floatArr = input.split(',').map(Number).filter(n => !isNaN(n));
    const count = floatArr.filter(n => Number.isInteger(n)).length;
    showResult(`Có ${count} số nguyên trong mảng`);
}

// 10. So sánh số dương và số âm
function comparePosNeg() {
    let pos = 0, neg = 0;
    arr.forEach(n => {
        if (n > 0) pos++;
        else if (n < 0) neg++;
    });
    let result = pos === neg ? 'Số dương và âm bằng nhau' : (pos > neg ? 'Số dương nhiều hơn' : 'Số âm nhiều hơn');
    showResult(result);
}

function showResult(text) {
    document.getElementById('result').textContent = text;
}
