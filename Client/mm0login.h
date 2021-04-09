#ifndef MM0LOGIN_H
#define MM0LOGIN_H

#include <QWidget>

namespace Ui {
class mm0login;
}

class mm0login : public QWidget
{
    Q_OBJECT

public:
    explicit mm0login(QWidget *parent = nullptr);
    ~mm0login();

private:
    Ui::mm0login *ui;
};

#endif // MM0LOGIN_H
