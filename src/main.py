import openai
import sys
import os

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
        response = openai.Completion.create(engine="text-davinci-003", prompt=content, max_tokens=100)
        return response.choices[0].text.strip()

def main():
    # Assumes that you're passing in the file paths as command line arguments
    openai.api_key = 'your-api-key'
    file1_path = sys.argv[1]
    file2_path = sys.argv[2]

    if not os.path.exists(file1_path) or not os.path.exists(file2_path):
        print("One or both of the provided file paths do not exist.")
        return

    file1_response = process_file(file1_path)
    file2_response = process_file(file2_path)

    print("File 1 Response: ", file1_response)
    print("File 2 Response: ", file2_response)

if __name__ == "__main__":
    main()
