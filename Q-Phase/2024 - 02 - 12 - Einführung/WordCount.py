import string

class WordCount:
    text = input("Enter the text: ")
    words = text.split()
    print("Number of words in the text:", len(words))