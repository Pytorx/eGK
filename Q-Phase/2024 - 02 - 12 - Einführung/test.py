import json
import random
import string
import getpass
from cryptography.fernet import Fernet

class PasswordManager:
    def __init__(self, master_password):
        self.master_password = master_password
        self.passwords = {}
        self.key = Fernet.generate_key()
        self.cipher_suite = Fernet(self.key)

    def generate_password(self, length=12):
        characters = string.ascii_letters + string.digits + string.punctuation
        password = ''.join(random.choice(characters) for i in range(length))
        return password

    def encrypt(self, data):
        encrypted_data = self.cipher_suite.encrypt(data.encode())
        return encrypted_data

    def decrypt(self, encrypted_data):
        decrypted_data = self.cipher_suite.decrypt(encrypted_data).decode()
        return decrypted_data

    def save_password(self, website, username, password):
        data = {
            "username": username,
            "password": self.encrypt(password)
        }
        self.passwords[website] = data

    def get_password(self, website):
        if website in self.passwords:
            data = self.passwords[website]
            return data["username"], self.decrypt(data["password"])
        else:
            return None

    def save_to_file(self, filename="passwords.json"):
        with open(filename, "w") as file:
            json.dump(self.passwords, file)

    def load_from_file(self, filename="passwords.json"):
        try:
            with open(filename, "r") as file:
                self.passwords = json.load(file)
        except FileNotFoundError:
            pass  # File not found, create new

if __name__ == "__main__":
    master_password = getpass.getpass("Enter your master password: ")
    password_manager = PasswordManager(master_password)

    while True:
        print("\n1. Generate Password")
        print("2. Save Password")
        print("3. Get Password")
        print("4. Save to File")
        print("5. Load from File")
        print("6. Exit")

        choice = input("Enter your choice (1-6): ")

        if choice == "1":
            length = int(input("Enter the length of the password: "))
            generated_password = password_manager.generate_password(length)
            print(f"Generated Password: {generated_password}")

        elif choice == "2":
            website = input("Enter the website: ")
            username = input("Enter the username: ")
            password = getpass.getpass("Enter the password: ")
            password_manager.save_password(website, username, password)

        elif choice == "3":
            website = input("Enter the website: ")
            result = password_manager.get_password(website)
            if result:
                username, decrypted_password = result
                print(f"Username: {username}\nPassword: {decrypted_password}")
            else:
                print("Password not found for the specified website.")

        elif choice == "4":
            password_manager.save_to_file()
            print("Passwords saved to file.")

        elif choice == "5":
            password_manager.load_from_file()
            print("Passwords loaded from file.")

        elif choice == "6":
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 6.")
