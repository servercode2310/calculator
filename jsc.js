 let expression = '';
        function appendDigit(digit) {
            if (expression === '0' && digit !== '.') {
                expression = digit;
            } else {
                expression += digit;
            }
            document.getElementById('display').innerText = expression;
        }
        function appendOperator(operator) {
            expression += operator;
            document.getElementById('display').innerText = expression;
        }
        function clearDisplay() {
            expression = '0';
            document.getElementById('display').innerText = expression;
        }
        function calculate() {
            try {
                let result = eval(expression);
                expression = result.toString();
                document.getElementById('display').innerText = expression;
                document.getElementById('result').innerText = `Result: ${result}`;
                var modal = new bootstrap.Modal(document.getElementById('resultModal'), {
                    keyboard: false
                });
                modal.show();
            } catch (e) {
                document.getElementById('result').innerText = `Error: ${e}`;
                var modal = new bootstrap.Modal(document.getElementById('resultModal'), {
                    keyboard: false
                });
                modal.show();
            }
        }