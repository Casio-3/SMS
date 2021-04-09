#include "mm0login.h"
#include "ui_mm0login.h"

mm0login::mm0login(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mm0login)
{
    ui->setupUi(this);
    setWindowFlags(windowFlags()&~Qt::WindowMaximizeButtonHint&~Qt::WindowContextHelpButtonHint);
    setFixedSize(this->width(), this->height());     // 设置登录窗口不显示帮助按钮、并固定窗口大小
}

mm0login::~mm0login()
{
    delete ui;
}
