#ifndef MM0LOGIN_H
#define MM0LOGIN_H

#include <QWidget>
#include <QJsonArray>
#include <QMessageBox>
#include <QCloseEvent>
#include "mm0register.h"

namespace Ui {
class mm0login;
}

class mm0login : public QWidget
{
    Q_OBJECT

public:
    explicit mm0login(QWidget *parent = nullptr);
    ~mm0login();

private slots:
    void on_btnlogin_clicked();
    void on_btnreg_clicked();

private:
    Ui::mm0login *ui;

};

#endif // MM0LOGIN_H
