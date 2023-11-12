#include <stdio.h> /* for printf() and fprintf() */
#include <sys/socket.h> /* for socket(), connect(), send(), and recv() */
#include <arpa/inet.h> /* for sockaddr_in and inet_addr() */
void DieWithError(char *errorMessage); /* Error handling function */ 

/*
Steps:
1. Connect to server via TCP socket
*/

char *servIP; /* Server IP address (dotted quad) */


int main(int argc, char *argv[]) {
    int sock;
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <Server IP> <Echo Word> [<Echo Port>]\n", argv[0]);
        exit(EXIT_FAILURE);
    }

    sock = socket (AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (sock < 0)
} 

void DieWithError(char *errorMessage)
{
        printf(errorMessage);
        printf("\n");
} 