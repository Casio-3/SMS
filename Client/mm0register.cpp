#include "mm0register.h"
#include "ui_mm0register.h"

mm0register::mm0register(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mm0register)
{
    ui->setupUi(this);
}

mm0register::~mm0register()
{
    delete ui;
}
