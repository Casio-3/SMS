#include "mainwindow.h"
#include "mainwindow.h"
#include "mm0login.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    mm0login dlglogin;
    if (dlglogin.exec() == QDialog::Accepted)
        w.show();
    else
        exit(0);
    return a.exec();
}
