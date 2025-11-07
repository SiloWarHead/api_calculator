from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend requests from any origin

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('expression', '')

    # allow only numbers, operators, and parentheses
    allowed_chars = "0123456789+-*/.() "
    if not all(char in allowed_chars for char in expression):
        return jsonify({'error': 'Invalid characters detected!'}), 400

    try:
        result = eval(expression)
        return jsonify({'result': result})
    except ZeroDivisionError:
        return jsonify({'error': 'Cannot divide by zero!'}), 400
    except Exception:
        return jsonify({'error': 'Invalid expression!'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)