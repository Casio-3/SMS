#ifndef MM0REGISTER_H
#define MM0REGISTER_H

#include <QWidget>

namespace Ui {
class mm0register;
}

class mm0register : public QWidget
{
    Q_OBJECT

public:
    explicit mm0register(QWidget *parent = nullptr);
    ~mm0register();

private:
    Ui::mm0register *ui;
};

#endif // MM0REGISTER_H
