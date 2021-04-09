#include "login.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    SMSystem w;
    w.show();
    return a.exec();
}
