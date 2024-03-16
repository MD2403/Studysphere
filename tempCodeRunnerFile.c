#include <stdio.h> #include <ctype.h>

int main() {
char inputString[100];
int i, digitsCount = 0, vowelsCount = 0, symbolsCount = 0;

printf("Enter a string: ");
fgets(inputString, sizeof(inputString), stdin);

for (i = 0; inputString[i] != '\0'; i++) { if (isdigit(inputString[i])) {
digitsCount++;
} else if (isalpha(inputString[i])) {

char lowercaseChar = tolower(inputString[i]);
if (lowercaseChar == 'a' || lowercaseChar == 'e' || lowercaseChar == 'i' || lowercaseChar == 'o' || lowercaseChar == 'u') {
vowelsCount++;
}
} else if (!isspace(inputString[i])) { symbolsCount++;
}
}

printf("Digits: %d\n", digitsCount); printf("Vowels: %d\n", vowelsCount); printf("Symbols: %d\n", symbolsCount);

return 0;
}



