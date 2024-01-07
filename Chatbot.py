import nltk
from nltk.chat.util import Chat, reflections

class SimpleChatbot:
    def __init__(self):
        # Define the chat pairs
        self.pairs = [
            [
                r"hi|hello|hey",
                ["Hello!", "Hi there!", "How can I help you today?"]
            ],
            [
                r"what is your name?",
                ["You can call me Chatbot.", "I'm Chatbot, your virtual assistant."]
            ],
            [
                r"how are you?",
                ["I'm doing well, thank you!", "I'm just a computer program, but I'm here to assist you."]
            ],
            [
                r"i love you aravind",
                ["i love you too haritha"]
            ],
            [
                r"i wanna cuddle with you",
                ["me too babe"]
            ],
            [
                r"pick up line for me",
                ["Are you an angel?"]
            ],
            [
                r"why?",
                ["You keep appearing in my dreams"]

            ],
            [
                r"aww"
                ["muahh"]
            ]
            # Add more chat pairs here
        ]
        
        # Create a chat instance
        self.chatbot = Chat(self.pairs, reflections)

    def start(self):
        print("Chatbot: Hello! Type 'quit' to exit.")
        while True:
            user_input = input("You: ")
            if user_input.lower() == 'quit':
                break
            response = self.chatbot.respond(user_input)
            print("Chatbot:", response)

if __name__ == "__main__":
    chatbot = SimpleChatbot()
    chatbot.start()
