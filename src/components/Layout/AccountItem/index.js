import style from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/43e0e31818b8c3ec48a7b0c789d22912.jpeg?x-expires=1656489600&x-signature=SkHD8Yec9cEVNz7fu4y7oQIoXdE%3D" alt="image" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Đỗ Cao Duy</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>caoduy26</span>
            </div>
        </div>
    );
}

export default AccountItem;
