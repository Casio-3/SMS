#include "mainwindow.h"
#include "mainwindow.h"
#include "mm0login.h"
#include "mm0register.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    mm0login dlglogin;
    dlglogin.show();

    return a.exec();
}
