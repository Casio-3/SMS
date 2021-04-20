#include "mm0register.h"
#include "ui_mm0register.h"
#include "mm0login.h"

mm0register::mm0register(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mm0register)
{
    ui->setupUi(this);
    setWindowFlags(windowFlags()&~Qt::WindowMaximizeButtonHint&~Qt::WindowContextHelpButtonHint);
    setFixedSize(this->width(), this->height());     // 设置注册窗口不显示帮助按钮、并固定窗口大小
    ui->Pwd1->setEchoMode(QLineEdit::Password);
    ui->Pwd2->setEchoMode(QLineEdit::Password);
    mode = 0;
}

mm0register::~mm0register()
{
    delete ui;
}

void mm0register::on_pushButton_2_clicked()
{
    this->close();
    mm0login *dlglogin = new mm0login;
    dlglogin->show();
}

void mm0register::on_pushButton_clicked()
{
    //注册成功
    //注册失败
}
